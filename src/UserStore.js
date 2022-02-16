import { action, computed, makeObservable, observable, autorun, runInAction } from 'mobx';

class UserStore {
    userInfo = {
        id: 'COM100',
        name: 'Christiano',
        skills: ['html','css','react']
    }
    constructor() {
        makeObservable(this, {
          userInfo: observable,
          skills: computed,
          updateUser: action,
          addSkills: action,
        });
        autorun(this.logUserDetails);
        runInAction(this.prefetchData);
    }
    get skills(){
        console.log('getter')
        return this.userInfo.skills.length
    }
    logUserDetails= () =>{
        console.log('Just for logs on skills', this.skills)
    }
    updateUser(newUserData){
        return newUserData
    }
    addSkills(newSkill){
        return newSkill
    }
    prefetchData(){
        console.log('run in action')
    }
}

export default UserStore;