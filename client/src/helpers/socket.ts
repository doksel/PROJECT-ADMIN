import io from "socket.io-client";
import { host } from "../services/api";

const socket = io(host);

export default socket;