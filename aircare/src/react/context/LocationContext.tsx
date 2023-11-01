import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { LatLng } from "leaflet";

type LocationContextType = {
    selectedLocation: LatLng | null;
    address: string | null;
    setSelectedLocation: (location: LatLng | null) => void;
    confirmAddress: boolean;
    handleConfirmation: () => void;
};

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const FindLocation = () => {
    const context = useContext(LocationContext);
    if (context === undefined) {
        throw new Error("useLocation must be used within a LocationProvider");
    }
    return context;
};

type LocationProviderProps = {
    children: ReactNode;
};

export const LocationProvider = ({ children }: LocationProviderProps) => {
    const [selectedLocation, setSelectedLocation] = useState<LatLng | null>(null);
    const [address, setAddress] = useState<string | null>(null);
    const [confirmAddress, setConfirmAddress] = useState<boolean>(false)

    const handleConfirmation: () => void = () => {
        setConfirmAddress(!confirmAddress)
    }

    useEffect(() => {
        if (selectedLocation) {
            fetchAddress(selectedLocation);
        }
    }, [selectedLocation]);

    async function fetchAddress(location: LatLng | null) {
        const apiKey = "217a3b2c5a0449dea640e84fd64c28b1";

        if (location) {
            const { lat, lng } = location;

            try {
                const response = await fetch(
                    `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`
                );

                if (response.ok) {
                    const data = await response.json();

                    if (data.results.length > 0) {
                        const formattedAddress = data.results[0].formatted;
                        setAddress(formattedAddress);
                    } else {
                        setAddress("Address not found");
                    }
                } else {
                    setAddress("Address not found");
                }
            } catch (error) {
                console.error("Error fetching address:", error);
                setAddress("Address not found");
            }
        }
    }

    return (
        <LocationContext.Provider value={{ selectedLocation, address, setSelectedLocation, confirmAddress, handleConfirmation }}>
            {children}
        </LocationContext.Provider>
    );
};
