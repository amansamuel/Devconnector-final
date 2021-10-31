import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import SelectListGroup from '../common/SelectListGroup';
import InputGroup from '../common/InputGroup';
import TextAreaGroup from '../common/TextAreaGroup';
import TextFieldGroup from '../common/TextFieldGroup';
import { createProfile } from '../../actions/profileActions';
class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state ={
            diplaySocialInputs:false,
            handle:'',
            company:'',
            website:'',
            location:'',
            status:'',
            skills:'',
            githubusername:'',
            bio:'',
            twitter:'',
            linkedin:'',
            youtube:'',
            instagram:'',
            errors:{}

        }
        this.onSubmit=this.onSubmit.bind(this);
        this.onChange =this.onChange.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors:nextProps.errors.errors})
        }
    }
    onChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e) {
        e.preventDefault();
        const profileData ={
            handle:this.state.handle,
            company:this.state.company,
            website:this.state.website,
            location:this.state.location,
            status:this.state.status,
            skills:this.state.skills,
            githubusername:this.state.githubusername,
            bio:this.state.bio,
            twitter:this.state.twitter,
            youtube:this.state.youtube,
            facebook:this.state.facebook
        }
        this.props.createProfile(profileData, this.props.history);
    }
    render() {
        const {errors,diplaySocialInputs} =this.state;
        let socialInput;
        if(diplaySocialInputs) {
            socialInput=(
                <div>
                    <InputGroup 
                    name="twitter"
                    icon='fab fa-twitter'
                    placeholder="Twitter Profile url"
                   onChange={this.onChange}
                   value={this.state.twitter}
                   errors={errors.twitter}
                    />
                    <InputGroup 
                    name="facebook"
                    icon='fab fa-facebook'
                    placeholder="facebook Profile url"
                   onChange={this.onChange}
                   value={this.state.facebook}
                   errors={errors.facebook}
                    />
                    <InputGroup 
                    name="youtube"
                    icon='fab fa-youtube'
                    placeholder="youtube Profile url"
                   onChange={this.onChange}
                   value={this.state.youtube}
                   errors={errors.youtube}
                    />
                    
                </div>
            )
        }
        const options=[
            {label:'* Select Professional status',value:0},
            {label:'Developer', value:'Developer'},
            {label:'Junier developer', value:'Juniur Developer'},
            {label:'Senior developer', value:'Senior Developer'},
            {label:'student or learnig', value:'student or learnig'},
            {label:'Teacher  or Instructor', value:'Teacher  or Instructor'},
            {label:'Intern', value:'Intern'},
            {label:'Other', value:'Other'}
            
        ]
        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Create your Profile</h1>
                            <p className="lead text-center">
                                Let's get Some information to make profile standout
                            </p>
                            <small className="d-block pb-3">* =required field</small>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup 
                                name="handle"
                                value={this.state.handle}
                                onChange={this.onChange}
                                placeholder="handle"
                                info="Handle Name for your Profile Url it can be fullname company name etc... "
                                errors={errors.handle}
                                />
                               
                                 <SelectListGroup 
                                name="status"
                                value={this.state.status}
                                onChange={this.onChange}
                                options={options}
                                placeholder="Status"
                                errors={errors.status}
                                info="give us where you are at your career"
                                />
                                 <TextFieldGroup 
                                    name="company"
                                    value={this.state.company}
                                    onChange={this.onChange}
                                    placeholder="Company"
                                    info="could be your own company or the one you are woring for"
                                    errors={errors.company}
                                 />
                                <TextFieldGroup 
                                name="website"
                                value={this.state.website}
                                onChange={this.onChange}
                                placeholder="Website"
                                info="cound be your website"
                                errors={errors.website}
                                />
                                <TextFieldGroup 
                                name="location"
                                value={this.state.location}
                                onChange={this.onChange}
                                placeholder="Location"
                                info="Your current Address"
                                errors={errors.address}
                                />
                                <TextFieldGroup 
                                name="skills"
                                value={this.state.skills}
                                onChange={this.onChange}
                                placeholder="Skills"
                                info="Please use comma separated values(e.g:css,html,javascript)"
                                errors={errors.skills}
                                />
                                {console.log(this.state.skills)}
                                <TextFieldGroup 
                                name="githubusername"
                                value={this.state.githubusername}
                                onChange={this.onChange}
                                placeholder="Github username"
                                info="If you want your github ribos"
                                errors={errors.githubusername}
                                />
                                <TextAreaGroup 
                                name="bio"
                                value={this.state.bio}
                                onChange={this.onChange}
                                placeholder="About Your self"
                                info="Tell us a little bit about you"
                                errors={errors.bio}
                                />
                                <div className="mb-3">
                                    <button type="button"
                                    onClick={() =>{
                                        this.setState(prevState => ({
                                            diplaySocialInputs: !prevState.diplaySocialInputs
                                         }))
                                    }} className="btn btn-light">Add Social Network link</button>
                                    <span>optional</span>
                                </div>
                                {socialInput}
                                <input  type="submit" value="submit" className="btn btn-info btn-block mt-4" />

                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
CreateProfile.PropsType ={
    profile:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps =state =>({
    profile:state.profile,
    errors:state.errors
})
export default  connect(mapStateToProps,{createProfile}) (
    withRouter(CreateProfile)
    );
