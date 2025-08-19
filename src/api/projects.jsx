import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = "http://127.0.0.1:8000";

export const getProjects = async () => {
  const res = await axios.get(`${API_BASE}/projects`);
  return res.data;
};
