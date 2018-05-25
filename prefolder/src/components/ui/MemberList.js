import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Member from './Member'

class MemberList extends Component {
    constructor(props){
        super(props)
        this.state = {
            members: [
                {
                    name: "Sarab",
                    email: "sarab.thebest@gmail.com",
                    thumbnail: "https://randomuser.me/api/portraits/men/53.jpg"
                },
                {
                    name: "anju",
                    email: "anju.kaur@gmail.com",
                    thumbnail: "https://randomuser.me/api/portraits/women/74.jpg"
                },
                {
                    name: "aman",
                    email: "akleoaman@gmail.com",
                    thumbnail: "https://randomuser.me/api/portraits/men/34.jpg"
                }
            ]
        }
    }
    render() {
        const { members } = this. state
        return (
            <div className="member-list">
            	<h1>Society Members</h1>
                {members.map(
                    (data, i) => <Member key={i} 
                    onClick={email => console.log(email)}
                    {...data} />
                )}

            </div>
        )    
   }     
}

export default MemberList