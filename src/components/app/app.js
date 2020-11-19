import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Ура! Приложение работает!🤩', important: true, like: false, id:3},
                {label: 'Is so cool! :)', important: false, like: false, id:2},
                {label: 'Если вы это видите, значит приложение работает!🤪', important: false, like: false, id:1},
            ],
            term: '',
            filter: 'all'
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [newItem,...data];
            return {
                data: newArr
            }
        })
    }

    toggleKey(id,value) {
        this.setState(({data}) => {
            let key;
            
            if (value === 'important') {
                key = 'important';
            };
            
            if (value === 'like') {
                key = 'like';
            };

            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, [key]: !old[key]};

            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, newItem, ...after];

            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.toggleKey(id, 'important');
    }

    onToggleLiked(id) {
        this.toggleKey(id, 'like');
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        let arr = items.filter((item) => {
            return item.label.indexOf(term) > -1 
        })

        if (arr.length>0) {
            return arr;
        } else {
            return arr = [{id:'ERROR_MESSAGE_404'}]
        }
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state,
              liked = data.filter(item => item.like).length,
              allPosts = data.length,
              visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostAddForm
                        onAdd={this.addItem}/>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>
            </div>
        )
    }
}