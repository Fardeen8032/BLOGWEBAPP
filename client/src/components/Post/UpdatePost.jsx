import {AddCircle} from '@material-ui/icons';
import "../Post/updatepost.css";



const UpdatePost = () =>{

    return(


        <div className="create">
          <img
             className="Img"
             src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
           />

            <form className="createForm">

                <div className="createFormGrp">
                    <label htmlFor="inputFile">
                      <AddCircle fontSize="large" color="action"/>
                    </label>
                    <input type="file" id="inputFile"/>
                    <input
                      type="text"
                      placeholder="AddTitle"
                      className="createInput"
                      autoFocus={true}
                      // onChange={(e) => setTitle(e.target.value)}
                    />
                </div>




                  <button  className="Submit">Update</button>


                 <div className="createtext">
                    <textarea
                    placeholder="Add Description" type="text"
                    className=" createInput  createText"
                    // onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                 </div>
            </form>

        </div>
    )
}
export default UpdatePost;
