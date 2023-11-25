import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateBuildingInput } from './inputs/create-building.input';
import { UpdateBuildingInput } from './inputs/update-building.input';
import { Args, Query } from "@nestjs/graphql";
import { Building } from "./building.entity";

@Injectable()
export class BuildingService {
  constructor(private readonly prisma: PrismaService) {}

  create(createBuildingInput: CreateBuildingInput) {
    return this.prisma.building.create({ data: createBuildingInput });
  }

  findAll() {
    return this.prisma.building.findMany({
      include: {
        syndic: true,
        apartments: true,
        commonFacilities: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.building.findUnique({
      where: { id },
      include: {
        syndic: true,
        apartments: true,
        commonFacilities: true,
      },
    });
  }

  update(id: number, updateBuildingInput: UpdateBuildingInput) {
    return this.prisma.building.update({
      where: { id },
      data: updateBuildingInput,
    });
  }

  remove(id: number) {
    return this.prisma.building.delete({ where: { id } });
  }
  @Query(() => Building)
  async buildingStatistics(@Args('buildingId') buildingId: number) {
    const building = await this.prisma.building.findUnique({
      where: { id: buildingId },
      include: {
        apartments: {
          include: {
            tenants: true,
          },
        },
      },
    });

    if (!building) {
      throw new Error(`Building with ID ${buildingId} not found`);
    }

    const totalApartments = building.apartments.length;
    const totalOccupied = building.apartments.filter(
      (apartment) => apartment.tenants.length > 0,
    ).length;
    const totalTenants = building.apartments.reduce(
      (total, apartment) => total + apartment.tenants.length,
      0,
    );
    const underOccupied = building.apartments.filter(
      (apartment) => apartment.tenants.length === 1,
    ).length;
    const overOccupied = building.apartments.filter(
      (apartment) => apartment.tenants.length > apartment.capacity,
    ).length;

    const occupancyRate = (totalOccupied / totalApartments) * 100;

    return {
      totalApartments,
      occupancyRate,
      totalTenants,
      underOccupied,
      overOccupied,
    };
  }
}
