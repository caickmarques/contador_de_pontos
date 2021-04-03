import React from 'react';
import { Container } from './style';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { MdModeEdit } from 'react-icons/md';

export const CardUser = ({ name }) => {
  return (
    <Container name={name}>
      <h3>{name}</h3>

      <div>
        <button>
          <MdModeEdit />
        </button>
        <button>
          <RiDeleteBin6Fill />
        </button>
      </div>
    </Container>
  );
};
