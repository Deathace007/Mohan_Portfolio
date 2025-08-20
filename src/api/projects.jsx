import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = "https://gtyzk9m0vb.execute-api.eu-north-1.amazonaws.com/dev/fetchprojects";

export const getProjects = async () => {
  const res = await axios.get(`${API_BASE}`);
  return res.data;
};
