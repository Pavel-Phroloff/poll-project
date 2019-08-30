import React from 'react';
import Pt from 'prop-types';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Input from '../../components/ui/Input/Input';
import Button from '../../components/ui/Button/Button';

import { Content } from './WelcomePage.styled';


import fetchPoll from '../../api/fetchPoll';

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pollUrlInput: 'https://opentdb.com/api.php?amount=3'
    };
  }


  handleInputChange = e => {
    const { target: { value } } = e;

    this.setState({
      pollUrlInput: value,
    });
  }

  handleSubmitInput = () => {
    const { getPoll } = this.props;
    const { pollUrlInput } = this.state;
    getPoll(pollUrlInput);
    this.setState({
      pollUrlInput: ''
    });
  }

  render() {
    const { fetching } = this.props;
    const { pollUrlInput } = this.state;
    return (<React.Fragment>
      <Header title='Welcome' />
      <Content>
        <Input
          value={pollUrlInput}
          onChange={this.handleInputChange}
          placeholder='http://example.com'
        />
        <Button
          onClick={this.handleSubmitInput}
          disabled={fetching || !pollUrlInput}
        >
          Send poll request
        </Button>
      </Content>
    </React.Fragment>);
  }
}

WelcomePage.propTypes = {
  fetching: Pt.bool.isRequired,
  getPoll: Pt.func.isRequired,
  pollUrl: Pt.string.isRequired,
};

const mapStateToProps = state => ({
  pollUrl: state.poll.pollUrl,
  fetching: state.poll.fetching,
});

const mapDispatchToProps = {
  getPoll: fetchPoll,
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
