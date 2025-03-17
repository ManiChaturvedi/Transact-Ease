import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useState, useEffect } from "react"
import axios from "axios"
import { getApiUrl } from "../config"

export const Dashboard = () => {
    const [balance, setBalance] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch user balance when component mounts
        const fetchBalance = async () => {
            try {
                const response = await axios.get(getApiUrl("/api/v1/account/balance"), {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
                setBalance(response.data.balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBalance();
    }, []);

    // Format the balance with commas for thousands
    const formatBalance = (amount) => {
        return amount ? amount.toLocaleString('en-IN', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 0
        }) : "0";
    };

    return <div>
        <Appbar />
        <div className="m-8">
            {loading ? (
                <div className="animate-pulse bg-gray-200 h-8 w-40 rounded"></div>
            ) : (
                <Balance value={formatBalance(balance)} />
            )}
            <Users />
        </div>
    </div>
}