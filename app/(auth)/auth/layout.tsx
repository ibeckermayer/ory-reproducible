import { PropsWithChildren } from 'react';
import '@ory/elements-react/theme/styles.css';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      {children}
    </div>
  );
}

