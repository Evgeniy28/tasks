import React               from 'react';

import {List, ListItem}    from 'material-ui/List';
import Divider             from 'material-ui/Divider';
import ActionHome          from 'material-ui/svg-icons/action/home';
import ViewListIcon        from 'material-ui/svg-icons/action/view-list';
import FolderIcon          from 'material-ui/svg-icons/file/folder';
import ExitIcon            from 'material-ui/svg-icons/action/exit-to-app';
import AddIcon             from 'material-ui/svg-icons/content/add';
import Colors              from 'material-ui/styles/colors';

import './TasklistsPage.scss';

const TasklistsPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render() {
    const { router } = this.context;

    return (
      <div className='TasklistsPage'>
        <div className='TasklistsPage__menu'>
          <List className='TasklistsPage__list'>
            <h3 className='TasklistsPage__title'>
              React Task Application
            </h3>
            <Divider />
            <List className='TasklistsPage__list'>
              <ListItem
                primaryText="Home"
                leftIcon={<ActionHome />}
                onClick={router.push.bind(null, `/lists`)}
              />
              <ListItem
                primaryText="About"
                leftIcon={<ViewListIcon />}
                onClick={router.push.bind(null, `/about`)}
              />
            </List>
            <Divider />
            <List className='TasklistsPage__list' subheader='Task Lists'>
              {
                this.props.taskLists.map(list =>
                  <ListItem
                    key={list.id}
                    leftIcon={<FolderIcon />}
                    primaryText={list.name}
                    onClick={router.push.bind(null, `/lists/${list.id}`)}
                    style={
                      this.props.selectedListId === list.id
                      ?
                        { backgroundColor: 'rgba(0,0,0,0.1)' }
                      :
                        null
                    }
                  />
                )
              }
              <ListItem
                primaryText="Create new list"
                leftIcon={<AddIcon />}
                onClick={this.props.onAddTaskList}
              />
            </List>
            <Divider />
            <List className='TasklistsPage__list'>
              <ListItem
                primaryText="Log out"
                leftIcon={<ExitIcon />}
                onClick={this.props.onLogOut}
              />
            </List>
          </List>
        </div>
        <div className='TasklistsPage__tasks'>
          {this.props.page}
        </div>
      </div>
    );
  }
});

export default TasklistsPage;
