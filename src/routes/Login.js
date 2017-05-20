import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username : '' ,
            password : '' ,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        console.log(this.props);
    }

    handleChange(event){
        let result = {};
        result[event.target.name] = event.target.value;
        this.setState(result);
    }

    handleSubmit(event){
        event.preventDefault();
        if(!this.state.username){
            alert("이름을 입력하세요");
            this.refs.usernameRef.focus();
            return;
        }
        if(!this.state.password){
            alert("비밀번호를 입력하세요");
            this.refs.passwordRef.focus();
            return;
        }

        axios.post('/v1/accounts/login', {
            username : this.state.username,
            password : this.state.password
        }).then( (res) => {
            if(res.data.message==="success"){
                alert('로그인이 성공하였습니다.');
                document.location.href = "/posts";
            }else{
                alert(res.data.message);
            }
        }).catch( (error) => {
            console.log(error);
        });


    }


    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">로그인</h3>
                        </div>
                        <div className="panel-body">
                            <form role="form" action="" id="join_form" method="post" onSubmit={this.handleSubmit}>
                                <fieldset>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="ID" name="username" ref="usernameRef" value={this.state.username} onChange={this.handleChange} type="text" required="" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Password" name="password" ref="passwordRef" value={this.state.password} onChange={this.handleChange} type="password"  required="" />
                                    </div>
                                    <input type="submit" className="btn btn-lg btn-success btn-block" value="로그인" />
                                    <div style={{ marginTop: "10px" }}>
                                        <a href="/auth/facebook" className="btn btn-lg btn-primary btn-block">
                                            <i className="fa fa-facebook" aria-hidden="true"></i> 페이스북으로 로그인
                                        </a>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;