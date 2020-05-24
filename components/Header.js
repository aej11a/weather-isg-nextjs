import React, {useState} from 'react'

export const Header = ({linking}) => {
    const [zip, setZip] = useState()

    const isValidZip = zip => !(isNaN(zip) || zip.length !== 5)

    return (
        <header className="header">
            {!!linking ? <a href="/"><h1>Weatherer</h1></a> : <h1>Weatherer</h1>}
                <>
                <input
                    className="Weather-input"
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    placeholder="zip code"
                    onChange={(event) => {
                        if (isValidZip(event.target.value)) {
                            setZip(event.target.value);
                        } else {
                            setZip(null);
                        }
                    }}
                />
                {zip && zip.length === 5 && <a href={`/weather/${zip}`} className={"go-button"}>Go</a>}
            </>
        </header>
    )
}