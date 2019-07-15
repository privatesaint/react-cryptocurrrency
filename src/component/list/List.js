import React, { Component } from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import Table from './Table';
import Loading from '../common/Loading';
import Pagination from './Pagination';

class List extends Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      curPag: [],
      timestamp: 0,
      totalPage: 0,
      page: 1,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/assets`)
      .then(handleResponse)
      .then(resp => {
        const { data, timestamp } = resp;
        this.setState(
          {
            currencies: data,
            timestamp,
            loading: false
          },
          () => {
            this.handlePagination(this.state.currencies, this.state.page);
          }
        );
      })
      .catch(err => this.setState({ error: err, loading: false }));
  }
  handlePagination = (items, page, per_page) => {
    //eslint-disable-next-line no-unused-expressions
    page = page || 1;
    per_page = per_page || 15;
    let offset = (page - 1) * per_page;

    let curPag = items.slice(offset).slice(0, per_page);
    let totalPage = Math.ceil(items.length / per_page);
    this.setState({
      page,
      totalPage,
      curPag
    });
  };
  handlePaginationClick = dir => {
    const { page, currencies } = this.state;
    let nextPage = page;
    // Increment nextPage if direction var is next, otherwise decrement it
    nextPage = dir === 'next' ? nextPage + 1 : nextPage - 1;
    this.handlePagination(currencies, nextPage);
  };
  render() {
    const { loading, curPag, error, page, totalPage } = this.state;
    // Loading
    if (loading) {
      return (
        <div className='loading-container'>
          <Loading />
        </div>
      );
    }
    // if error
    if (error) {
      // console.log(error);
      return <div className='error'>Error</div>;
    }
    return (
      <>
        <Table currencies={curPag} />
        <Pagination
          handlePaginationClick={this.handlePaginationClick}
          page={page}
          totalPage={totalPage}
        />
      </>
    );
  }
}

export default List;
