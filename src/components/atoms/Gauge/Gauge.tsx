import React from 'react';
import { Wrapper, IndicatorElement } from './style';

interface Indicator {
  count: number;
  color: string;
}

interface GaugeProps {
  indicators: Array<Indicator>
}

const Gauge: React.FC<GaugeProps> = ({ indicators }) => {
  const total = indicators.reduce((acc, curr) => acc + curr.count, 0);

  const getIndicatorPercent = (indicator: Indicator) => (indicator.count / total) * 100;

  return (
    <Wrapper>
      {indicators.map((indicator) => (
        <IndicatorElement
          key={indicator.color}
          style={{ width: `${getIndicatorPercent(indicator)}%`, backgroundColor: indicator.color }}
        />
      ))}
    </Wrapper>
  );
};

export default Gauge;
