import React, { Component } from 'react';

class Form extends Component {
    
    render() {
        return (
            <form action="" method="post">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <th>제목</th>
                            <td><input type="text" name="title" ref="titleRef" className="form-control"  /></td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td><input type="text" name="content" ref="contentRef" className="form-control" /></td>
                        </tr>
                        <tr>
                            <th>섬네일</th>
                            <td>
                                <input type="file" name="thumbnail" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-primary">작성하기</button>
            </form>
        );
    }
}
export default Form;