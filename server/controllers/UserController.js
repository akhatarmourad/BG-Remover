import { Svix, Webhook } from "svix";
import UserModel from "../models/UserModel";

// API Controller to manage Clerck User with MongoDB Database
const clerckWebhooks = async (request, response) => {
    try {
        // Svix is a webhook management service that simplifies sending and receiving webhooks in applications.
        const webhook = new Webhook(ProcessingInstruction.env.CLERCK_WEBHOOK_SECRET);

        await webhook.verify(JSON.stringify(request.body), {
            "svix-id": request.headers["svix-id"],
            "svix-timestamp": request.headers["svix-timestamp"],
            "svix-signature": request.headers["svix-signature"]
        });

        // Destruct data & type from request body
        const { data, type } = request.body;
        switch (type) {
            case "user.created": {
                const userData = {
                    clerckId: data.id,
                    email: data.email_addresses[0].email_address,
                    photo: data.image_url,
                    firstname: data.first_name,
                    lastname: data.last_name
                }

                await UserModel.create(userData);
                response.json({});

                break;
            }
            
            case "user.updated": {
                const userData = {
                    email: data.email_addresses[0].email_address,
                    photo: data.image_url,
                    firstname: data.first_name,
                    lastname: data.last_name
                }

                await UserModel.findOneAndUpdate({clerckId: data.id}, userData);
                response.json({});

                break;
            }

            case "user.deleted": {
                await UserModel.findOneAndDelete({clerckId: data.id});
                response.json({});

                break;
            }

            default:
                break;
        }
    }
    catch(error) {
        console.log(error.message);
        response.json({sucess: false, message: error.message})
    }
}

export { clerckWebhooks }