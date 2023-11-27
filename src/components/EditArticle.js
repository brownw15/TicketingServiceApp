import React, { Component } from 'react';
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import {MegadraftEditor, editorStateFromRaw, editorStateToJSON} from "megadraft";
import 'megadraft/dist/css/megadraft.css';
import {ArticleDelete} from "./ArticleDelete.js";

export class ArticleEdit extends React.Component {
  constructor(props) {
    super(props);
    // Here's the content you stored in the base
    //const myContent = data;
    //const data = { };
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
      //console.log('Data!',article_data);
    })
    .catch(function(error){
      console.log(error)
    })
  }

  onChange = (editorState) =>  {
    this.setState({editorState});
  }

  onSaveClick = (e) =>{
    e.preventDefault();
    const url = "http://localhost:4000/articleUpdate/";
    const {editorState} = this.state;
    //console.log(editorState);
    const content = editorStateToJSON(editorState);
    //console.log( 'New content to be sent' + editorStateToJSON(editorState));

     axios.put(url + this.props.match.params.id, {content})
    .then(res => {
      console.log(res.data);
      console.log("Successfully upated");
    })
    .catch(err => {
      if (err.response) {
        console.log(err.response);
      } else if (err.request) {
        // client never received a response, or request never left
          console.log(err.request);
      } else {
          console.log('other error');
      }
    })
  }

  /*onDeleteClick = () => {
    const obj = {};
      axios.delete('http://localhost:4000/articleDelete/'+ this.props.match.params.id)
       .then(res => {
         console.log('Success',res.data);
         alert("Article Successfully Published");
         this.setState({ redirect: "/search" });
       })
       .catch(err => {
        if (err.response) {
          console.log("error with respones", err.response);
        } else if (err.request) {
          // client never received a response, or request never left
            console.log(err.request);
        } else {
            console.log('success');
        }
       })
  } */

  render() {
    return (
        <div className="dashboardPage">
            <div className="editor">
              <h3>Update Article</h3>
              <div className="editorRoot">
                <MegadraftEditor
                  id="megadraft"
                  editorState={this.state.editorState}
                  onChange={this.onChange}
                  showSidebar = {true}
                  submitFileUrl={this.props.submit_file_url}
                />
                <div className="editorButtons">
                    <button>
                      <a  href="javascript:history.back()">Go Back</a>
                    </button>
                    <button onClick={this.onSaveClick}>
                      Update
                    </button>
                    <button>
                      <ArticleDelete/>
                    </button>
                </div>
              </div>
          </div>
      </div>
    );
  }
}


const headingIcon = () => {
    return (
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heading" class="svg-inline--fa fa-heading fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z"></path></svg>
    );
}
