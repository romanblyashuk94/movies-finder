import s from './SearchForm.module.scss';
import { Component } from 'react';

class SearchForm extends Component {
  state = {
    currentSearchQuery: '',
  };

  onSearchInputChange = e => {
    this.setState({ currentSearchQuery: e.target.value });
  };

  onSubmitForm = e => {
    e.preventDefault();

    const { currentSearchQuery } = this.state;

    if (currentSearchQuery) {
      this.props.onSubmit(currentSearchQuery);
    }

    this.setState({ currentSearchQuery: '' });
  };

  render() {
    return (
      <form className={s.searchForm} onSubmit={this.onSubmitForm}>
        <input
          className={s.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie by keyword"
          value={this.state.currentSearchQuery}
          onChange={this.onSearchInputChange}
        />
        <button type="submit" className={s.searchFormButton}>
          <span className={s.searchFormButtonLabel}>Search</span>
        </button>
      </form>
    );
  }
}

export default SearchForm;
