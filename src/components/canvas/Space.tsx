import { StarShape } from '@/components/canvas/star-shape';
import { PerspectiveCamera } from '@react-three/drei';
import { Suspense, useRef } from 'react';

import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MathUtils, Vector3 } from 'three';
import { useCameraMovement } from '../provider/camera';
import image1 from './star-image-templates/image-1.png';
import image2 from './star-image-templates/image-2.png';
import image3 from './star-image-templates/image-3.png';
import image4 from './star-image-templates/image-4.png';

interface SpaceProps {
  onClickProjects: VoidFunction;
}

export function Space(props: SpaceProps) {
  const { onClickProjects } = props;

  const cameraRef = useRef<THREE.PerspectiveCamera>();

  const { cameraDefaultPos, cameraDefaultRotation, targetPosition, targetRotation, cameraSpeed, handleZoomCamera } =
    useCameraMovement();

  useFrame((_, delta) => {
    if (!cameraRef.current) return;
    cameraRef.current.position.lerp(targetPosition, cameraSpeed * delta);

    cameraRef.current.rotation.x = MathUtils.lerp(cameraRef.current.rotation.x, targetRotation.x, cameraSpeed * delta);
    cameraRef.current.rotation.y = MathUtils.lerp(cameraRef.current.rotation.y, targetRotation.y, cameraSpeed * delta);
    cameraRef.current.rotation.z = MathUtils.lerp(cameraRef.current.rotation.z, targetRotation.z, cameraSpeed * delta);
  });

  const handleClickProjects = (position: Vector3) => {
    handleZoomCamera(position);
    onClickProjects();
  };

  return (
    <Suspense fallback={null}>
      {/* TODO: Loading state */}
      <PerspectiveCamera ref={cameraRef} makeDefault position={cameraDefaultPos} rotation={cameraDefaultRotation} />
      <StarShape image={image1} position={[-3, 0, -1]} text='About' onClick={handleZoomCamera} />
      <StarShape image={image2} position={[0, 1, -1]} text='Experience' onClick={handleZoomCamera} />
      <StarShape image={image3} position={[3, 0, -1]} text='Projects' onClick={handleClickProjects} />
      <StarShape image={image4} position={[0, -1.5, -1]} text='Resume' onClick={handleZoomCamera} />

      <ambientLight />
    </Suspense>
  );
}
