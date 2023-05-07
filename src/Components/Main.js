import { Form } from "./Form";
import { db } from "../Firebase_config";
import { collection, addDoc } from "firebase/firestore";

function Main() {
  const usersCollectionRef = collection(db, "users");
  // const createdata = (data) => {
  //   console.log(data, data.fullName);
  // };
  const createdata = async (data) => {
    await addDoc(usersCollectionRef, data);
  };
  return (
    <div className="App  ">
      <Form loaddata={createdata} />
    </div>
  );
}

export default Main;
