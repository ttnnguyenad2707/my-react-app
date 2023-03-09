import { Fragment } from "react"

function EditRow({ id, Name, Age, Gender, onClick }) {


    return (
        <Fragment>
            {id &&
                <tr>

                    <th scope="row">
                        <input value={id}>

                        </input>
                    </th>
                    <td>
                        <input value={Name}>

                        </input>
                    </td>

                    <td>
                        <input value={Age}>
                        </input>
                    </td>
                    <td><input value={Gender}></input></td>

                    <td>
                        <button className="btn btn-primary mr-3">Save</button>
                        <button className="btn btn-primary mr-3">Cancel</button>

                    </td>
                </tr>
            }
        </Fragment>

    )
}
export default EditRow