// TableComponent.jsx
import React , { useState, useEffect } from 'react';
import '../TableComponent.css'; 

const TableComponent = () => {
  const apiUrl = "https://ProjetNBA.herokuapp.com/api/getListStatistiqueJoueur";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('tsy mety');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        setError('Erreur lors de la récupération des données. Veuillez réessayer.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Saison Stat</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Classement</th>
            <th>Joueur</th>
            <th>Equipe</th>
            <th>M</th>
            <th>MJ</th>
            <th>PPM</th>
            <th>PRM</th>
            <th>PDPM</th>
            <th>MPM</th>
            <th>FG%</th>
            <th>3P%</th>
            <th>%LF</th>
            <th>DESACTIVE</th>
            <th>DEF</th>
            <th>IPM</th>
            <th>cPM</th>
            <th>BP</th>
            <th>FP</th>
          </tr>
        </thead>
        <tbody>
          {data.map((joueur) => (
            <tr key={joueur.id}>
              <td>{joueur.classement}</td>
              <td>{joueur.joueur}</td>
              <td>{joueur.equipe}</td>
              <td>{joueur.m}</td>
              <td>{joueur.mj}</td>
              <td>{joueur.ppm}</td>
              <td>{joueur.prm}</td>
              <td>{joueur.pdpm}</td>
              <td>{joueur.mpm}</td>
              <td>{joueur.fg}</td>
              <td>{joueur.threeP}</td>
              <td>{joueur.ft}</td>
              <td>{joueur.desactive}</td>
              <td>{joueur.def}</td>
              <td>{joueur.ipm}</td>
              <td>{joueur.cpm}</td>
              <td>{joueur.bp}</td>
              <td>{joueur.fp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
