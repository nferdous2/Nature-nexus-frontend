import React from 'react';
import { useParams, useRouteLoaderData } from 'react-router';

const AnimalDetails = () => {
  const animals = useRouteLoaderData();

  if (!Array.isArray(animals) || animals.length === 0) {
    return <div>Loading...</div>;
  }

  // const { params } = useRouteLoaderData();
  const animalId = useParams.id;

  // Find the specific animal based on the id
  const animal = animals.find((item) => item.id === animalId);

  if (!animal) {
    return <div>Animal not found</div>;
  }

  const { description } = animal;

  return (
    <div>
      <h1>{description}</h1>
    </div>
  );
};

export default AnimalDetails;
