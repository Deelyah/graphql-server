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

  parseJSONtoFormData(data: Record<string, string>) {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
  }

  marketPlaceApi() {
    if (this.token && this.id) {
      const payload = {
        AUTH_TOKEN: this.token,
        AUTH_ID: this.id,
        PLATFORM: "MKTPLC_WEB",
      };

      axiosInstance.defaults.headers.common = {
        NETAPPS: JSON.stringify(payload),
      };
    }
    return axiosInstance;
  }
}
