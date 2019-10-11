type Fonts = {
  [name: string]: {
    title: string;
    color: string;
    backgroundColor: string;
    borderColor: string;
    fontSize: number;
    borderWidth: number;
  };
};

const fonts: Fonts = {
  jido: {
    title: "こども風",
    color: "#000",
    backgroundColor: "#fff",
    borderColor: "#000",
    fontSize: 57,
    borderWidth: 5
  },
  dq: {
    title: "RPG風",
    color: "#fff",
    backgroundColor: "#000",
    borderColor: "#fff",
    fontSize: 64,
    borderWidth: 1
  }
};

export default fonts;
