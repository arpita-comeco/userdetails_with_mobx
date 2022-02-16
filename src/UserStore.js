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
    
    logUserDetails= () =>{
        console.log('autorun- Just for logs on skills', this.skills, 'logs for name change', this.userInfo.name)
    }
    updateUser(newUserData){
        this.userInfo.name= newUserData
    }
    addSkills(newSkill){
        return this.userInfo.skills=[...this.userInfo.skills,newSkill]
    }
    prefetchData(){
        console.log('run in action')
    }
    get skills(){
        console.log('getter')
        return this.userInfo.skills.length
    }
}

export default UserStore;