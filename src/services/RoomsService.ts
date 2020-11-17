import axios from "axios";

type Room = {
  id: string;
  name: string;
  createdBy: string;
};
export const getAvailableChannels = async (): Promise<Array<Room>> => {
  const { data } = await axios.get<Array<Room>>("/rooms");
  return data;
};
