import type { APIApplicationCommandInteraction } from "discord-api-types/v10";
import { ApplicationCommandType } from "discord-api-types/v10";
import callCommand from "./call";
import { respond } from "../utils/discordInteractions";

export default async function commandHandler(interaction: APIApplicationCommandInteraction, request: Request): Promise<Response> {
  if (interaction.data.type === ApplicationCommandType.ChatInput) {
    if (interaction.data.name === "call") return respond(await callCommand(interaction as never, request));
  }

  return new Response("", { status: 400 });
}
