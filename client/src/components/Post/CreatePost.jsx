import {AddCircle} from '@material-ui/icons';
import { useState, useContext } from 'react';
import "../Post/createpost.css";
import axios from "axios";
import { Context } from "../../context/Context";
const CreatePost = () =>{
 const [title,setTitle] =useState("");
 const [desc,setDesc]= useState("");
 const [file,setFile] = useState(null);
 const {user} = useContext(Context);

 const handleSubmit = async(e) =>{
   e.preventDefault();

   const newPost = {
     username:user.username,
     title,
     desc,
   };
   if(file){
     const data = new FormData();
     const filename = Date.now() + file.name;
     data.append("name", filename);
     data.append("file",file);
     newPost.photo = filename;

     try{
        await axios.post("http://localhost:5000/api/upload", data);
     } catch (err) {}
   }
   try{
        const res = await axios.post("http://localhost:5000/api/posts", newPost);
        window.location.replace("/detailpost/" + res.data._id);
      } catch (err) {}
 };
 return(

  <div className="create">
  { file && (
    <img
      className="Img"
      src={URL.createObjectURL(file)}
      alt=""
    />
  )}
    <form className="createForm" onSubmit={handleSubmit}>
        <div className="createFormGrp">
            <label htmlFor="inputFile">
              <AddCircle fontSize="large" color="action"/>
            </label>
            <input type="file"
                   id="inputFile"
                   onChange = {(e) => setFile(e.target.files[0])}
            />
            <input type="text"
                   placeholder="AddTitle"
                   className="createInput"
                   autoFocus={true}
                   required
                   onChange={e=>setTitle(e.target.value)}
            />
        </div>

           <button className="Submit" type="submit">Publish</button>

         <div className="createtext">
            <textarea placeholder="Add Description"
                      type="text"
                      className=" createInput  createText"
                      required
                      onChange={e=>setDesc(e.target.value)}
            ></textarea>
         </div>
    </form>

  </div>

    );
}
export default CreatePost;