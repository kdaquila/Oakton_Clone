import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import styles from './Dropdown.scss'

class Dropdown extends Component{
    constructor(props){
        super(props);
        this.state = {
            listOpen: false,
            headerTitle: this.props.title
        };
        this.close = this.close.bind(this)
    }

    componentDidUpdate(){
        const { listOpen } = this.state;
        setTimeout(() => {
            if(listOpen){
                document.addEventListener('click', this.close)
            }
            else{
                document.removeEventListener('click', this.close)
            }
        }, 0)
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.close)
    }

    close(timeOut){
        this.setState({
            listOpen: false
        })
    }

    selectItem(title, id, stateKey){
        this.setState({
            headerTitle: title,
            listOpen: false
        }, this.props.resetThenSet(id, stateKey))
    }

    toggleList(){
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    render(){
        const{list} = this.props;
        const{listOpen, headerTitle} = this.state;
        return(
            <div className={styles.ddWrapper}>
                <div className={styles.ddHeader} onClick={() => this.toggleList()}>
                    <div className={styles.ddHeaderTitle}>{headerTitle}</div>
                    {listOpen
                        ? <FontAwesome name="angle-up" size="2x"/>
                        : <FontAwesome name="angle-down" size="2x"/>
                    }
                </div>
                {listOpen && <ul className={styles.ddList} onClick={e => e.stopPropagation()}>
                    {list.map((item)=> (
                        <li className={styles.ddListItem}
                            key={item.id}
                            onClick={() => this.selectItem(item.title, item.id, item.key)}>
                            {item.title} {item.selected && <FontAwesome name="check"/>}
                        </li>
                    ))}
                </ul>}
            </div>
        )
    }
}

export default Dropdown