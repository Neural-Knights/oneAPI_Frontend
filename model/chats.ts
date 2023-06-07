import { Schema, model, models } from "mongoose";

const chatSchema = new Schema({
	user: [
		{
			type: Schema.Types.ObjectId,
			ref: "user",
		},
	],
	chatbot: {
		type: Boolean,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	time: {
		type: String,
		required: true,
	},
});

const Chats = models.chat || model("chat", chatSchema);

export default Chats;
