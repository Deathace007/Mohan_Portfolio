import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = "https://iusspuber5.execute-api.eu-north-1.amazonaws.com/default/fetchProjects";

export const getProjects = async () => {
  const res = await axios.get(`${API_BASE}/projects`);
  return res.data;
};
