import React from 'react';
import Pt from 'prop-types';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Input from '../../components/ui/Input/Input';
import Button from '../../components/ui/Button/Button';

import { Content } from './QuestionsPage.styled';

import pollActions from '../../redux/modules/poll/actions';

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkboxResult: null,
      radioResult: null
    };
  }

  render() {
    const { pollData } = this.props;
    const { apiAdressInput } = this.state;
    return (<>
      <Header title='Welcome' />
      <Content>
        <Input
          value={apiAdressInput}
          onChange={this.handleInputChange}
          placeholder='http://example.com'
        />
        <Button
          onClick={this.handleSubmitInput}
          disabled={fetching || !apiAdressInput}
        >
          Send poll request
        </Button>
      </Content>
    </>);
  }
}

WelcomePage.propTypes = {
  setResults: Pt.func.isRequired,
  pollData: Pt.array.isRequired,
};

const mapStateToProps = state => ({
  pollData: state.poll.pollData,
});

const mapDispatchToProps = {
  setAnswer: pollActions.setResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
