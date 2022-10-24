import { React, useEffect, useState } from "react";

import { GoogleMap, useLoadScript, Circle } from '@react-google-maps/api';
import { Table } from '@table-library/react-table-library/table';

import axios, { AFFECTED_AREAS_ENDPOINT } from "../api/axios";

const BannerHero = () => {
    return (
        <div className="banner-wrapper bg-light">
            <div
            id="index_banner"
            className="banner-vertical-center-index container-fluid pt-5"
            >
                <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="py-5 row d-flex align-items-center">
                                <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                    <h1 className="banner-heading h1 text-secondary display-3 mb-0 pb-5 mx-0 px-0 light-300 typo-space-line">
                                        List of Affected Areas
                                    </h1>
                                    <AffectedTable />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="py-5 row d-flex align-items-center">
                                <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                    <h1 className="banner-heading h1 text-secondary display-3 mb-0 pb-5 mx-0 px-0 light-300 typo-space-line">
                                        Map of Affected Areas
                                    </h1>
                                    <Map />
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev text-decoration-none"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-bs-slide="prev"
                    >
                        <i className="bx bx-chevron-left"></i>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next text-decoration-none"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-bs-slide="next"
                    >
                        <i className="bx bx-chevron-right"></i>
                        <span className="visually-hidden">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BannerHero;

function Map() {

    useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_APIKEY,
    })

    const default_center = {lat: 1.35945, lng: 103.8239};
    const default_zoom = 11;
    const radius = 5000;

    const options = {
        fillColor: "#FF0000",
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 0.1,
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        zIndex: 1
    };

    const central = {
        regionName: "central",
        center: {lat: 1.3551, lng: 103.8628}
    };
    const north = {
        regionName: "north",
        center: {lat: 1.4206, lng: 103.7756}
    };
    const south = {
        regionName: "south",
        center: {lat: 1.2950, lng: 103.7961}
    };
    const east = {
        regionName: "east",
        center: {lat: 1.3533, lng: 103.9653}
    };
    const west = {
        regionName: "west",
        center: {lat: 1.3556, lng: 103.7086}
    };

    const [affected, setAffected] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    AFFECTED_AREAS_ENDPOINT
                );
                console.log("data", response?.data);
                setAffected(response?.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    var places = [];

    for (let i=0; i<affected.length; i++) {
        let area = affected[i];
        if ((area.regionName.toLowerCase() === "north") && (places.indexOf(north) === -1)) {
            places.push(north);
        } else if ((area.regionName.toLowerCase() === "south") && (places.indexOf(south) === -1)) {
            places.push(south);
        } else if ((area.regionName.toLowerCase() === "east") && (places.indexOf(east) === -1)) {
            places.push(east);
        } else if ((area.regionName.toLowerCase() === "west") && (places.indexOf(west) === -1)) {
            places.push(west);
        } else if ((area.regionName.toLowerCase() === "central") && (places.indexOf(central) === -1)) {
            places.push(central);
        }
    };

//    console.log(places);

    return (
        <GoogleMap zoom={default_zoom} center={default_center} mapContainerClassName="map-container">
            <div>
                {places.map((data) => (<Circle center={data.center} radius={radius} options={options} />))}
            </ div>
        </GoogleMap>
    );
}

function AffectedTable(props) {
    const heading = ["Region", "Area", "Postal Code", "Case Count"];
    const [affected, setAffected] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    AFFECTED_AREAS_ENDPOINT
                );
                console.log("data", response?.data);
                response?.data.sort((a,b) => (a.regionName > b.regionName) ? 1 : ((b.regionName > a.regionName) ? -1 : 0));

                var temp = [];
                if (response?.data.length>0) {
                    for (let i=0; i<response?.data.length; i++) {
                        if (response?.data[i].caseCount > 0) {
                            temp.push(response?.data[i]);
                        }
                    }
                }
                setAffected(temp);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="table-container">
            <table className="table-affected">
                <thead>
                    <tr>
                        {heading.map((head) => (
                            <th>{head}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {affected.map((row) => (
                        <tr>
                            <td>
                                {row.regionName}
                            </td>
                            <td>
                                {row.areaName}
                            </td>
                            <td>
                                {row.postcode}
                            </td>
                            <td>
                                {row.caseCount}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}