import { useEffect, useState } from 'react';

export default function DomainPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDomainData = async () => {
      const domain = 'tndpayment.eth';
      const apiURL = `https://namestone.xyz/api/public_v1/get-domain?domain=${domain}`;
      
      const res = await fetch(apiURL, {
        method: 'GET',
        headers: {
          Authorization: '241cea56-7f9b-4e66-ac17-cb2e8edd61cc',
        },
      });

      const result = await res.json();
      setData(result);
      setLoading(false);
    };

    fetchDomainData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Domain Info</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}