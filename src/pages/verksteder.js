import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>Verkstedliste</h1>
        <table>
          <thead>
            <tr>
              <th>Bedriftsnavn</th>
              <th>Adresse</th>
              <th>Postnummer</th>
              <th>Poststed</th>
              <th>Godkjenninger</th>
              <th>Organisasjonsnummer</th>
            </tr>
          </thead>
          <tbody>
            {data.allRepairShopsCsv.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.Bedriftsnavn}</td>
                <td>{node.Adresse}</td>
                <td>{node.Postnummer}</td>
                <td>{node.Poststed}</td>
                <td>{node.Godkjenninger}</td>
                <td>{node.Organisasjonsnummer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
      allRepairShopsCsv {
        totalCount
        edges {
          node {
            id
            Bedriftsnavn
            Adresse
            Postnummer
            Poststed
            Godkjenninger
            Organisasjonsnummer
          }
        }
      }
    }
`