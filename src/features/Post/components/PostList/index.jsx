import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './PostList.scss';
import { Link, useRouteMatch } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

PostList.propTypes = {
  
};

function PostList(props) {
  const match = useRouteMatch();
  const [isIconActive, setIconActive] = useState(false);

  function hanldeIconActive() {
    setIconActive(!isIconActive);
  }
  
  return (
    <Container fluid className="post-list">
      <h1 className="text-center">All items trading</h1>
      <Row>
        {/* FAKE DATA */}
        <Col xs="6" lg="2">
          <Card className="post-list__card">
            <Link to={`${match.url}/post123456`}>
              <CardImg top width="100%" src="https://i.picsum.photos/id/37/200/200.jpg?hmac=iQLD6vXJYds0UdYxW9UhbkVxORZeEckKL-FVeaMfwF0" alt="Card image cap" />
              <CardBody className="post-list__card__body">
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text</CardText>
              </CardBody>
            </Link>
            {
              isIconActive ? 
              <FaHeart className="post-list__card__icon--active" onClick={hanldeIconActive} color="red" />
              :
              <FaRegHeart className="post-list__card__icon" onClick={hanldeIconActive} />
            }
          </Card>
        </Col>

        <Col xs="6" lg="2">
          <Card className="post-list__card">
            <Link to={`${match.url}/post123456`}>
              <CardImg top width="100%" src="https://i.picsum.photos/id/37/200/200.jpg?hmac=iQLD6vXJYds0UdYxW9UhbkVxORZeEckKL-FVeaMfwF0" alt="Card image cap" />
              <CardBody className="post-list__card__body">
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text</CardText>
              </CardBody>
            </Link>
            {
              isIconActive ? 
              <FaHeart className="post-list__card__icon--active" onClick={hanldeIconActive} color="red" />
              :
              <FaRegHeart className="post-list__card__icon" onClick={hanldeIconActive} />
            }
          </Card>
        </Col>
        <Col xs="6" lg="2">
          <Card className="post-list__card">
            <Link to={`${match.url}/post123456`}>
              <CardImg top width="100%" src="https://i.picsum.photos/id/37/200/200.jpg?hmac=iQLD6vXJYds0UdYxW9UhbkVxORZeEckKL-FVeaMfwF0" alt="Card image cap" />
              <CardBody className="post-list__card__body">
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text</CardText>
              </CardBody>
            </Link>
            {
              isIconActive ? 
              <FaHeart className="post-list__card__icon--active" onClick={hanldeIconActive} color="red" />
              :
              <FaRegHeart className="post-list__card__icon" onClick={hanldeIconActive} />
            }
          </Card>
        </Col>

        <Col xs="6" lg="2">
          <Card className="post-list__card">
            <Link to={`${match.url}/post123456`}>
              <CardImg top width="100%" src="https://i.picsum.photos/id/37/200/200.jpg?hmac=iQLD6vXJYds0UdYxW9UhbkVxORZeEckKL-FVeaMfwF0" alt="Card image cap" />
              <CardBody className="post-list__card__body">
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text</CardText>
              </CardBody>
            </Link>
            {
              isIconActive ? 
              <FaHeart className="post-list__card__icon--active" onClick={hanldeIconActive} color="red" />
              :
              <FaRegHeart className="post-list__card__icon" onClick={hanldeIconActive} />
            }
          </Card>
        </Col>

        <Col xs="6" lg="2">
          <Card className="post-list__card">
            <Link to={`${match.url}/post123456`}>
              <CardImg top width="100%" src="https://i.picsum.photos/id/37/200/200.jpg?hmac=iQLD6vXJYds0UdYxW9UhbkVxORZeEckKL-FVeaMfwF0" alt="Card image cap" />
              <CardBody className="post-list__card__body">
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text</CardText>
              </CardBody>
            </Link>
            {
              isIconActive ? 
              <FaHeart className="post-list__card__icon--active" onClick={hanldeIconActive} color="red" />
              :
              <FaRegHeart className="post-list__card__icon" onClick={hanldeIconActive} />
            }
          </Card>
        </Col>

        <Col xs="6" lg="2">
          <Card className="post-list__card">
            <Link to={`${match.url}/post123456`}>
              <CardImg top width="100%" src="https://i.picsum.photos/id/37/200/200.jpg?hmac=iQLD6vXJYds0UdYxW9UhbkVxORZeEckKL-FVeaMfwF0" alt="Card image cap" />
              <CardBody className="post-list__card__body">
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text</CardText>
              </CardBody>
            </Link>
            {
              isIconActive ? 
              <FaHeart className="post-list__card__icon--active" onClick={hanldeIconActive} color="red" />
              :
              <FaRegHeart className="post-list__card__icon" onClick={hanldeIconActive} />
            }
          </Card>
        </Col>

        <Col xs="6" lg="2">
          <Card className="post-list__card">
            <Link to={`${match.url}/post123456`}>
              <CardImg top width="100%" src="https://i.picsum.photos/id/37/200/200.jpg?hmac=iQLD6vXJYds0UdYxW9UhbkVxORZeEckKL-FVeaMfwF0" alt="Card image cap" />
              <CardBody className="post-list__card__body">
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text</CardText>
              </CardBody>
            </Link>
            {
              isIconActive ? 
              <FaHeart className="post-list__card__icon--active" onClick={hanldeIconActive} color="red" />
              :
              <FaRegHeart className="post-list__card__icon" onClick={hanldeIconActive} />
            }
          </Card>
        </Col>

        <Col xs="6" lg="2">
          <Card className="post-list__card">
            <Link to={`${match.url}/post123456`}>
              <CardImg top width="100%" src="https://i.picsum.photos/id/37/200/200.jpg?hmac=iQLD6vXJYds0UdYxW9UhbkVxORZeEckKL-FVeaMfwF0" alt="Card image cap" />
              <CardBody className="post-list__card__body">
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text</CardText>
              </CardBody>
            </Link>
            {
              isIconActive ? 
              <FaHeart className="post-list__card__icon--active" onClick={hanldeIconActive} color="red" />
              :
              <FaRegHeart className="post-list__card__icon" onClick={hanldeIconActive} />
            }
          </Card>
        </Col>

        <Col xs="6" lg="2">
          <Card className="post-list__card">
            <Link to={`${match.url}/post123456`}>
              <CardImg top width="100%" src="https://i.picsum.photos/id/37/200/200.jpg?hmac=iQLD6vXJYds0UdYxW9UhbkVxORZeEckKL-FVeaMfwF0" alt="Card image cap" />
              <CardBody className="post-list__card__body">
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text</CardText>
              </CardBody>
            </Link>
            {
              isIconActive ? 
              <FaHeart className="post-list__card__icon--active" onClick={hanldeIconActive} color="red" />
              :
              <FaRegHeart className="post-list__card__icon" onClick={hanldeIconActive} />
            }
          </Card>
        </Col>

        <Col xs="6" lg="2">
          <Card className="post-list__card">
            <Link to={`${match.url}/post123456`}>
              <CardImg top width="100%" src="https://i.picsum.photos/id/37/200/200.jpg?hmac=iQLD6vXJYds0UdYxW9UhbkVxORZeEckKL-FVeaMfwF0" alt="Card image cap" />
              <CardBody className="post-list__card__body">
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text</CardText>
              </CardBody>
            </Link>
            {
              isIconActive ? 
              <FaHeart className="post-list__card__icon--active" onClick={hanldeIconActive} color="red" />
              :
              <FaRegHeart className="post-list__card__icon" onClick={hanldeIconActive} />
            }
          </Card>
        </Col>

        <Col xs="6" lg="2">
          <Card className="post-list__card">
            <Link to={`${match.url}/post123456`}>
              <CardImg top width="100%" src="https://i.picsum.photos/id/37/200/200.jpg?hmac=iQLD6vXJYds0UdYxW9UhbkVxORZeEckKL-FVeaMfwF0" alt="Card image cap" />
              <CardBody className="post-list__card__body">
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text</CardText>
              </CardBody>
            </Link>
            {
              isIconActive ? 
              <FaHeart className="post-list__card__icon--active" onClick={hanldeIconActive} color="red" />
              :
              <FaRegHeart className="post-list__card__icon" onClick={hanldeIconActive} />
            }
          </Card>
        </Col>

        <Col xs="6" lg="2">
          <Card className="post-list__card">
            <Link to={`${match.url}/post123456`}>
              <CardImg top width="100%" src="https://i.picsum.photos/id/37/200/200.jpg?hmac=iQLD6vXJYds0UdYxW9UhbkVxORZeEckKL-FVeaMfwF0" alt="Card image cap" />
              <CardBody className="post-list__card__body">
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text</CardText>
              </CardBody>
            </Link>
            {
              isIconActive ? 
              <FaHeart className="post-list__card__icon--active" onClick={hanldeIconActive} color="red" />
              :
              <FaRegHeart className="post-list__card__icon" onClick={hanldeIconActive} />
            }
          </Card>
        </Col>

        <Col xs="6" lg="2">
          <Card className="post-list__card">
            <Link to={`${match.url}/post123456`}>
              <CardImg top width="100%" src="https://i.picsum.photos/id/37/200/200.jpg?hmac=iQLD6vXJYds0UdYxW9UhbkVxORZeEckKL-FVeaMfwF0" alt="Card image cap" />
              <CardBody className="post-list__card__body">
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text</CardText>
              </CardBody>
            </Link>
            {
              isIconActive ? 
              <FaHeart className="post-list__card__icon--active" onClick={hanldeIconActive} color="red" />
              :
              <FaRegHeart className="post-list__card__icon" onClick={hanldeIconActive} />
            }
          </Card>
        </Col>


      </Row>
    </Container>
  );
}

export default PostList;