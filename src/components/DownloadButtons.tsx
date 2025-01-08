import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Panel, useReactFlow } from '@xyflow/react';
import { Download } from 'lucide-react';
import { toPng, toJpeg, toSvg } from 'html-to-image';

export const DownloadButtons = () => {
  const { getNodes } = useReactFlow();
  
  const downloadImage = async (format: 'png' | 'jpeg' | 'svg') => {
    const flowElement = document.querySelector('.react-flow') as HTMLElement;
    if (!flowElement) return;

    try {
      let dataUrl;
      switch (format) {
        case 'png':
          dataUrl = await toPng(flowElement, { quality: 0.95 });
          break;
        case 'jpeg':
          dataUrl = await toJpeg(flowElement, { quality: 0.95 });
          break;
        case 'svg':
          dataUrl = await toSvg(flowElement);
          break;
      }

      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `lineage-graph.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  return (
    <Panel position="top-right" className="bg-transparent">
      <div className="flex items-center gap-2">
        <ToggleGroup type="single" className="bg-gray-800 rounded-lg p-1">
          <ToggleGroupItem value="png" size="sm" onClick={() => downloadImage('png')}>
            PNG
          </ToggleGroupItem>
          <ToggleGroupItem value="jpeg" size="sm" onClick={() => downloadImage('jpeg')}>
            JPEG
          </ToggleGroupItem>
          <ToggleGroupItem value="svg" size="sm" onClick={() => downloadImage('svg')}>
            SVG
          </ToggleGroupItem>
        </ToggleGroup>
        <Button size="sm" variant="outline" className="bg-gray-800">
          <Download className="h-4 w-4" />
        </Button>
      </div>
    </Panel>
  );
};