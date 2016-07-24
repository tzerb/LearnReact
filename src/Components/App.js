import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import $ from 'jquery';

class App extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.ajaxCall = this.ajaxCall.bind(this);
    }

    ajaxCall()
    {
        // alert('ajaxCall');
        // let component = this;
        // $.get("https://api.github.com/users/petehunt", function(data)
        // {
        //     alert(data.login);
        // });
//https://api.github.com/users/tzerb

        let request = $.ajax({
            url: "http://localhost:15989/api/Values",
            method: "GET",
            dataType: "json",
            beforeSend: function( xhr ) {
                xhr.overrideMimeType( "text/json;" );
            }

            
        }).done(function( msg ) {
            if (msg.data.message)
            {
                alert( "Request worked: " + msg.data.message );
            }
            else
            {
                alert( "Request worked: " + msg.data.login );
            }
        }).fail(function( jqXHR, textStatus ) {
            alert( "Request failed: " + jqXHR.statusText + " Status: " + jqXHR.status );
        });
        
    }
    
    render() {
        return (
            <div className = "container-fluid">
                <input type="submit"
                        value ="AjaxCall"
                        className = "btn btn-primary"
                        onClick={this.ajaxCall}/>            
                <Header loading={this.props.loading} />
                {this.props.children}
            </div>
        );
    }

}

App.propTypes = {
    children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps)
{
    return { loading: state.ajaxCallsInProgress > 0};
}
export default connect(mapStateToProps)(App);
