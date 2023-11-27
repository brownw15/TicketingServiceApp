import React, {Component} from "react";
import { Link , Redirect} from 'react-router-dom';
import {MainSearchbar, GetHelp, PopularCard} from "./UserSideComponents.js";
import { MegadraftEditor, editorStateFromRaw, editorStateToJSON } from 'megadraft';
import axios from 'axios';
//import data from "./test.js";
import 'megadraft/dist/css/megadraft.css';



export class Article extends React.Component {
  constructor(props) {
    super(props);

    const editorState = editorStateFromRaw(null);
    this.state = {editorState};
  }

  componentDidMount() {
    axios.get('http://localhost:4000/articleEdit/'+this.props.match.params.id)
    .then(response => {
      const article_data = JSON.parse(response.data.content);
      this.setState({
        editorState : editorStateFromRaw(article_data)
      });
      console.log('Data!',article_data);
    })
    .catch(function(error){
      console.log(error)
    })
  }

 onChange = (editorState) =>  {
    this.setState({editorState});
  }

  render() {
    return(
        <div className="dashboardPage">
          <div className="editor">
            <h3>Read an Article</h3>
            <div className="editorRoot">
              <MegadraftEditor 
                id="megadraft"
                editorState={this.state.editorState}
                onChange={this.onChange}
                readOnly={true}
                showSidebar={false}
              />
              <div className="editorButtons">
                <button>
                  <a  href="javascript:history.back()">Go Back</a>
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

<Link to={"/article/edit/:id"}>Edit this article </Link>
