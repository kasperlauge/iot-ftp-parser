import { connect, connection, model, disconnect } from "mongoose";
import { IDataEntryDocument } from "../models/data-entry.model";
import dataEntrySchema from "./data-entry-schema";

// Initialize different mongoose schemas

export function connectToDb() {
  return new Promise((resolve) => {
    const dbURI = process.env.IOT_MONGODB_URI;
  
    connection.on("error", console.error.bind(console, "connection error:"));
  
    connection.once("open", arg => {
      console.log("Connected to database");
      resolve();
    });
  
    connection.on("disconnected", () => {
      console.log("Disconnected from database");
    });
    
    connect(dbURI, { useNewUrlParser: true });
  });
}

export const registerSchemas = () => {
  return model<IDataEntryDocument>("dataEntry", dataEntrySchema);
}

export function disconnectFromDb() {
  disconnect();
}
