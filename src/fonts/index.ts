type Fonts = {
  [name: string]: {
    title: string;
    color: string;
    backgroundColor: string;
    borderColor: string;
    fontSize: number;
    borderWidth: number;
    borderStyle: string;
    padding: number;
  };
};

const fonts: Fonts = {
  game: {
    title: "ゲーム風",
    color: "#fff",
    backgroundColor: "#000",
    borderColor: "#fff",
    fontSize: 53,
    borderWidth: 1,
    borderStyle: "solid",
    padding: 10
  },
  jido: {
    title: "こども風",
    color: "#000",
    backgroundColor: "#fff",
    borderColor: "#000",
    fontSize: 57,
    borderWidth: 5,
    borderStyle: "solid",
    padding: 0
  }
};

export default fonts;
