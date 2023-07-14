import crypto from "crypto";
import jwt from "jsonwebtoken";
import { Document, FilterQuery, Model } from "mongoose";

import axiosInstance from "./helpers/axiosInstance.js";
import { ErrorHandlers } from "./helpers/ErrorHandlers.js";
import GeneralController from "./helpers/generalController.js";
import MongooseErrorUtils from "./helpers/mongoErrorHandling.js";
import FormData from "form-data";

interface ApiKeys {
  publicKey: string;
  secretKey: string;
  testPublicKey: string;
  testSecretKey: string;
}

export default class Base extends GeneralController {
  public errorMessage = "Invalid response, something went wrong!";
  private token: string | undefined;
  private id: string | undefined;
  constructor(token?: string, id?: string) {
    super();
    this.token = token;
    this.id = id;
  }

  parseJSONtoFormData(data: Record<string, any>): FormData {
    const formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

    return formData;
  }

  marketPlaceApi() {
    if (this.token && this.id) {
      // const payload = {
      //   AUTH_TOKEN: this.token,
      //   AUTH_ID: this.id,
      //   PLATFORM: "WEB",
      // };
      // NETAPPS: JSON.stringify(payload),

      axiosInstance.defaults.headers.common = {
        "x-platform": "WEB",
        "x-auth-token": this.token,
        "x-auth-id": this.id,
      };
    }
    return axiosInstance;
  }
}
