import React, {Component} from 'react';
import Contact from './contact/contact';
import style from './contacts.module.scss';
import { getAllUsers, userBaned } from '../../actions/actionCreator';
import connect from 'react-redux/es/connect/connect';

class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: []
        };
        this.clickOnSelect = this.clickOnSelect.bind(this);
    }

    clickOnSelect = (id,status) => {
this.props.userBaned(id,status);
    };



    render() {

        const arrayUsers = [];
        for (let i = 0; i < this.props.array.length; i++) {
            arrayUsers.push(<span key={this.props.array[i].id}>
                <div key={this.props.array[i].id} className={style.contact}>
                        <Contact
                        click={this.clickOnSelect}
                        id={this.props.array[i].id}
                        img={"http://www.simonhoegsberg.com/faces_of_new_york/images/11_faces.jpg"}
                        name={this.props.array[i].firstName + "   " + this.props.array[i].lastName }
                        displayName={this.props.array[i].displayName}
                        position={this.props.array[i].customerStatus}
                        isbanned={this.props.array[i].isBaned}
                         />
                </div>
                  <div className={style.line}/>
            </span>);
        }
        return (
            <div className={style.list}>

                    {arrayUsers}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state,
        users:state.getAllUsersReducer.data
    };
};
const mapDispatchToProps = (dispatch) => ({
    userBaned: (id,status) => dispatch(userBaned(id,status)),
    getAllUsers: () => dispatch(getAllUsers()),
});

export default connect(mapStateToProps,mapDispatchToProps)( Contacts);
