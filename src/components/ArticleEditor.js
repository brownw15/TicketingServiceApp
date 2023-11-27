import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import axios from "axios";
import {MegadraftEditor, editorStateFromRaw, editorStateToJSON} from "megadraft";
import redraft from 'redraft';
import 'megadraft/dist/css/megadraft.css';
import actions from "megadraft/lib/actions/default";


export class ArticleEditor extends React.Component {
  constructor(props) {
    super(props);
    // Here's the content you stored in the base
    // const myContent = load_from_db();
    const myContent = {
      "entityMap": {},
      "blocks": [
        {
          "key": "ag6qs",
          "text": "",
          "type": "unstyled",
          "depth": 0,
          "inlineStyleRanges": [],
          "entityRanges": [],
          "data": {}
        }
      ]
    };
    const redirect = null;
    const editorState = editorStateFromRaw(myContent);
    this.state = {editorState};
  }

  onChange = (editorState) =>  {
    this.setState({editorState});
  }
  onSaveClick = () => {
    const url = "http://localhost:4000/article";
    const {editorState} = this.state;
    const content = editorStateToJSON(editorState);
    //console.log(content);


    //onsole.log(articleData);
    //let data = JSON.stringify(articleData);
    //Sconsole.log(data);
    axios.post(url, {content})
    .then(res => {
      //console.log(res.data);
      alert("Article Successfully Published");
      this.setState({ redirect: "/search" });
    })
    .catch(err => {
      if (err.response) {
        //console.log(err.response);
      } else if (err.request) {
        // client never received a response, or request never left
          console.log(err.request);
      } else {
          console.log('success');
          alert("Article Successfully Published");
          this.setState({ redirect: "/someRoute" });
      }
    });

  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
          <div className="editorRoot">

            <MegadraftEditor
              id="megadraft"
              editorState={this.state.editorState}
              onChange={this.onChange}
              placeholder = 'Start a new article with your title. Highlight it and press the T button to make it a header'
              showSidebar = {true}
            />
            <button onClick={this.onSaveClick}>
              Publish
            </button>
          </div>
    );
  }
}

class headingIcon extends React.Component {
  render() {
    return (
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heading" class="svg-inline--fa fa-heading fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z"></path></svg>
    );
  }
}
