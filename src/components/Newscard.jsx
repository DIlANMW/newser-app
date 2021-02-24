import React from 'react';
import './boostcss.css';

export const Newscard = ({ Title, content, img, date, author }) => {
  return (
    <div className='container-fluid d-flex justify-content-center'>
      <section id='gallery'>
        <div className='container'>
          <div className='row '>
            <div className='col-sm-7 mb-4'>
              <div className='card'>
                <img src={img} alt='' className='card-img-top' />
                <div className='card-body'>
                  <h5 className='card-title'>{Title}</h5>
                  <p className='card-text'>{content}</p>
                  <a href='ss' className='btn btn-outline-success btn-sm'>
                    Add reading list
                  </a>
                  <p className='card-text'>
                    <small className='text-muted'>
                      <i className='far fa-user'></i>
                      {author}
                      <i className='fas fa-calendar-alt'></i>
                      {date}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
