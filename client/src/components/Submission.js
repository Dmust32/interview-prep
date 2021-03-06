import React, {Component} from 'react'
import Nav from './Nav';
import '../css/submission.css'
import '../css/main.css'
import AddFile from './AddFile'


class Submission extends Component {
    state = {
        testFile: '',
        fileToTest: ''
    }

    updateTestFile(file){
        this.setState({testFile: file})
    }
    render(){
        return(
            <div>

                <Nav />
                <div>
                    <h1 className="text header">Submit new problems</h1>
                    <h3 className="text header-med">Thanks for helping Interview Prepper grow</h3>
                    <p className ="text copy">You ever roasted doughnuts?You gotta go through it to see there ain't nothing to it.Listen to the silence. And when the silence is deafening, you're in the center of your own universe.The best way to communicate is compatible. Compatible communication is listening with open ears and an open mind, and not being fearful or judgemental about what you're hearing. 
                    </p>
                </div>
                
                 <div className="sub-contain">

                    
                    {this.state.testFile ? 
                        <div className= 'file-preview'>
                            {this.state.testFile}
                        </div> :
                        <AddFile updateTestfile= {this.updateTestFile}/>
                     }
                 </div>

            </div>
        )
    }
}

export default Submission