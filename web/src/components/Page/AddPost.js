import React from 'react'

import '../../assets/css/App.css';

import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw
} from 'draft-js'

class AddPost extends React.Component {
  constructor(props){
    super(props)
    this.state = {editorState: EditorState.createEmpty()};
  }

  onChange(editorState) {
    console.log("ini state yang berubah : ", editorState);
    this.setState({editorState});
  }

  makeBold() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'BOLD'
    ));
  }

  makeItalic() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'ITALIC'
    ))
  }

  render(){
    const raw = convertToRaw(this.state.editorState,getCurrentContent());
    return(
      <div>
        <h4 style={{ fontWeight: 200, fontSize: 35, fontfamily: 'Roboto' }}>Feel Free to Register your Account!</h4>
        <button onClick={() => {this.makeBold()}}>BOLD</button>
        <button onClick={() => {this.makeItalic()}}>ITALIC</button>
        <button onClick={() => {this.makeItalic()}}>ITALIC2</button>
        <Editor style={{  }}
          editorState={this.state.editorState}
          onChange={(editorState) => { this.onChange(editorState) }}
          placeholder="This is the Editor"
          />
      </div>
    )
  }
}

export default AddPost;
